interface SocialLinkProps {
  icon: string;
  text: string;
  url: string;
}

export default function SocialLink({ icon, text, url }: SocialLinkProps) {
  return (
    <a className='social-text text-orange-300 hover:text-orange-100 ml-5' href={url} target='_blank'><i className={'bi-' + icon} /> {text}</a>
  );
}