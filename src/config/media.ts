import founderPhoto from '@/assets/founder-photo.jpg';

export const FOUNDER_PHOTO_ALT = 'Founder headshot, Mission Digital';

export function getFounderPhotoUrl(): string {
  try {
    if (typeof window !== 'undefined') {
      const override = localStorage.getItem('founderPhotoUrl');
      if (override && override.trim() !== '') return override;
    }
  } catch (_) {
    // ignore access errors
  }
  return founderPhoto;
}
