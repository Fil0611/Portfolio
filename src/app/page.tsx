import GradientText from '@/components/gradientText';
import SocialLink from '@/components/socialLink';
import { MarkGithubIcon } from '@primer/octicons-react';

export default function Home() {
  return (
    <>
      <GradientText text='Ciao, sono Filippo' />
      <div className='md:m-5'>
        <h1>Studio Ingegneria Informatica,</h1><br />
        <h1>ma sono sempre in cerca di nuove opportunità per imparare.</h1>
      </div>
      <div className='flex flex-col w-full border-opacity-50'>
        <div className='divider' />
      </div>
      <div className='grid grid-flow-col grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5'>
        <SocialLink icon={<MarkGithubIcon />} text={'Linkedin'} url={'https://www.linkedin.com/in/filippo-battaglin-691002207/'} />
        <SocialLink icon={<MarkGithubIcon />} text={'GitHub'} url={'https://github.com/Fil0611'} />
      </div>
    </>
  );
}