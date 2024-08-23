import clsx from 'clsx';

export type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';

export type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  variant: 'title' | 'title_h3' | 'paragraph16_regular' | 'paragraph14_regular';
  tag?: TypographyTag;
  children: React.ReactNode;
};

export const Typography = <Tag extends TypographyTag = 'div'>({
  variant,
  tag = 'div',
  className,
  children,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  return (
    <Component className={clsx(variant, className)} {...props}>
      {children}
    </Component>
  );
};
