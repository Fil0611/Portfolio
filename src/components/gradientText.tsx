interface GradientTextProps {
  text: string;
}

export default function GradientText({text}: GradientTextProps) {
  return (
    <div className='gradient-text m-4 mb-10 md:mx-10 md:mb-0'>{text}</div>
  )
}