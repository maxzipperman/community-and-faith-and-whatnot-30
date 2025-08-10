import { supabase } from '@/integrations/supabase/client';

export class SupabaseService {
  static async analyzeWithAI(pages: any[], goals: string) {
    try {
      const { data, error } = await supabase.functions.invoke('ai-feedback', {
        body: { pages, goals }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Supabase AI analysis error:', error);
      throw error;
    }
  }

  static async getRemainingRequests() {
    try {
      const { data, error } = await supabase.functions.invoke('ai-feedback-status');
      if (error) throw error;
      return data.remainingRequests || 0;
    } catch (error) {
      console.error('Error getting remaining requests:', error);
      return 0;
    }
  }
}