import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyLayout from '../components/CaseStudyLayout';

export default function CaseStudyPage() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return <CaseStudyLayout slug={slug} />;
}