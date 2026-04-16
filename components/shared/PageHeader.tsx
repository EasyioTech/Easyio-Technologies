import { TextReveal, FadeIn } from "./Animations";

interface PageHeaderProps {
  title: string;
  italicTitle?: string;
  description: string;
}

export const PageHeader = ({ title, italicTitle, description }: PageHeaderProps) => {
  return (
    <div className="mb-24">
      <h1 className="heading-1 mb-8">
        <TextReveal>{title}</TextReveal>
        {italicTitle && (
          <>
            {" "}
            <br />
            <TextReveal
              delay={0.3}
              className="text-zinc-400 dark:text-zinc-700 italic font-light"
            >
              {italicTitle}
            </TextReveal>
          </>
        )}
      </h1>
      <FadeIn delay={0.6}>
        <p className="max-w-2xl text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
          {description}
        </p>
      </FadeIn>
    </div>
  );
};
