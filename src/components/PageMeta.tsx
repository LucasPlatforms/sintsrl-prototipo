import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
}

export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
}
