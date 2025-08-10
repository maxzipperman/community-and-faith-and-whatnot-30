import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Database, CheckCircle, AlertCircle } from 'lucide-react';

// Check if Supabase is properly configured
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const DatabaseSetup = () => {
  const { toast } = useToast();
  const [isSetup, setIsSetup] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  const checkTableExists = async () => {
    if (!supabase) {
      setIsSetup(false);
      setIsChecking(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('ai_feedback_usage')
        .select('id')
        .limit(1);
      
      setIsSetup(!error);
    } catch (e) {
      setIsSetup(false);
    } finally {
      setIsChecking(false);
    }
  };

  const createTable = async () => {
    if (!supabase) return;

    try {
      const { error } = await supabase.rpc('create_ai_feedback_table');
      if (error) throw error;
      
      setIsSetup(true);
      toast({
        title: "Database ready!",
        description: "AI feedback tracking table created successfully.",
      });
    } catch (error: any) {
      console.error('Database setup error:', error);
      toast({
        title: "Setup failed",
        description: "Please contact support for database setup assistance.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    checkTableExists();
  }, []);

  // If Supabase is not configured, show configuration message
  if (!supabase) {
    return (
      <Card className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            Supabase Configuration Required
          </CardTitle>
          <CardDescription>
            The AI feedback system requires Supabase to be properly connected. 
            Please ensure your project is connected to Supabase and the environment variables are configured.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            If you've already connected Supabase, try refreshing the page. 
            The environment variables may need a moment to propagate.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isChecking) {
    return (
      <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-600" />
            Checking Database Setup...
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }

  if (isSetup) {
    return (
      <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Database Ready
          </CardTitle>
          <CardDescription>
            AI feedback system is configured and ready to use.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5 text-amber-600" />
          Database Setup Required
        </CardTitle>
        <CardDescription>
          The AI feedback system needs a database table to track usage and rate limiting.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={createTable} className="w-full">
          Setup Database Table
        </Button>
      </CardContent>
    </Card>
  );
};