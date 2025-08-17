-- Fix database function security by setting proper search_path
CREATE OR REPLACE FUNCTION public.cleanup_old_ai_feedback_usage()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  DELETE FROM public.ai_feedback_usage 
  WHERE last_request_at < now() - interval '24 hours';
END;
$function$;

CREATE OR REPLACE FUNCTION public.create_ai_feedback_table()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  -- This function exists to satisfy the DatabaseSetup component
  -- but the table will already be created by this migration
  NULL;
END;
$function$;

-- Fix IP address protection by implementing more restrictive RLS policies
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Allow service role access" ON public.ai_feedback_usage;

-- Create more restrictive policies
-- Only allow service role to read/write (for system operations)
CREATE POLICY "Service role full access" ON public.ai_feedback_usage
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Allow authenticated users to only view aggregated stats (no individual IP exposure)
CREATE POLICY "Users can view aggregated stats only" ON public.ai_feedback_usage
FOR SELECT 
TO authenticated
USING (false); -- Disabled for now - would need aggregate view if needed

-- Anonymous users have no access to IP data
CREATE POLICY "Anonymous users no access" ON public.ai_feedback_usage
FOR ALL 
TO anon
USING (false)
WITH CHECK (false);