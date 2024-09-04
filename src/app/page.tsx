import GradientText from '@/components/gradientText';
import SocialLink from '@/components/socialLink';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return (
    <>
      <GradientText text='Ciao, sono Filippo' />
      <div className='md:m-5'>
        <h1>Studio Ingegneria Informatica,</h1><br />
        <h1>ma sono sempre in cerca di nuove opportunità per imparare.</h1>
      </div>
      <div className='mt-20'>
        <SocialLink icon={'linkedin'} text={'Linkedin'} url={'https://www.linkedin.it'} />
        <SocialLink icon={'github'} text={'GitHub'} url={'https://www.github.it'} />
      </div>
    </>
  );
}