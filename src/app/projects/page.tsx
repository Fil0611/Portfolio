import GradientText from '@/components/gradientText';
import ProjectCard from '@/components/projectCard';
import { MarkGithubIcon } from '@primer/octicons-react';
import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <GradientText text='Progetti' />

      <div className='rounded-box glass-box px-3'>
        <h1 className='py-5 ml-5'>
          <MarkGithubIcon size={'medium'} verticalAlign='middle' className='pb-1' /> GitHub
        </h1>
        <div className='carousel carousel-center bg-transparent max-w-full space-x-4 mb-3'>
          <div className='carousel-item'>
            <ProjectCard />
          </div>
        </div>
      </div>

    </>
  );
}