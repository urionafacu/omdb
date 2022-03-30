export type TextVariants =
  | "titleBig"
  | "title"
  | "subtitle"
  | "bodyBig"
  | "bodyTitle"
  | "body"
  | "bodySmall";

export type ColorsText =
  | "primary"
  | "secondary"
  | "active"
  | "negative"
  | "highlight"
  | "disabled";

export type TextProps = {
  variant?: TextVariants;
  color?: ColorsText;
  children: React.ReactNode;
  className?: string;
};

export type HookType = {
  color: Partial<ColorsText>;
  variant: Partial<TextVariants>;
};
