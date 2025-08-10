import founderPhoto from '@/assets/founder-photo.jpg';

export const DEFAULT_FOUNDER_PHOTO = '/lovable-uploads/88cef1c1-afe2-4335-aff0-96264d92eea2.png';
export const FOUNDER_PHOTO_ALT = 'Founder headshot with golden retriever at the beach — Mission Digital';

export function getFounderPhotoUrl(): string {
  try {
    if (typeof window !== 'undefined') {
      const override = localStorage.getItem('founderPhotoUrl');
      if (override && override.trim() !== '') return override;
    }
  } catch (_) {
    // ignore access errors
  }
  return DEFAULT_FOUNDER_PHOTO || founderPhoto;
}
