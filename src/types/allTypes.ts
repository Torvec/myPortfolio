// Hero Types

//! NONE

// About Me Types

//! NONE

// Projects Types

export type TechStackItemProps = {
  item: string;
};

export type TechStackListProps = {
  list: string[];
};

export type ViewButtonProps = {
  text: string;
  href: string;
};

export type InfoContainerProps = {
  projectName: string;
  description: string;
  techStack: string[];
  repositoryURL: string;
  deploymentURL: string;
};

export type ImageContainerProps = {
  translateImg: string;
  translateShadow: string;
  imgURL: string;
  projectName: string;
};

export type ProjectCardProps = {
  colOrderStyles: string;
  translateImg: string;
  translateShadow: string;
  imgURL: string;
  projectName: string;
  repositoryURL: string;
  deploymentURL: string;
  description: string;
  techStack: string[];
};

// Resume Types

export type ResumeItemProps = {
  id?: number;
  startDate: string;
  endDate: string;
  logo: string;
  company?: string;
  institution?: string;
  jobTitle?: string;
  program?: string;
  location: string;
  details: string;
};

export type ResumeListProps = {
  list: ResumeItemProps[];
  type?: string;
};

// Contact Me Types

export type FormLabelProps = {
  forText: string;
  labelText: string;
};

export type FormInputProps = {
  inputType: string;
  inputId: string;
  inputName: string;
  inputPlaceholder: string;
};

export type FormMessageProps = {
  messageId: string;
  messageName: string;
  messagePlaceholder: string;
  messageRows: number;
  messageMaxLength: number;
};

export type SubmitButtonProps = {
  text: string;
};

export type AvailabilityItemProps = {
  type: string;
  availability: string;
};

// Component Types

export type ContainerProps = {
  children: React.ReactNode;
  id: string;
};

export type ActionButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "disabled" | "link" | "icon";
  className?: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  href?: string;
};

export type ActionHeaderProps = {
  header: string;
};

export type SectionHeaderProps = {
  section: string;
  title: string;
};

export type SocialLinkItemProps = {
  href: string;
  logo: string;
  label: string;
};

export type MenuItemProps = {
  children: React.ReactNode;
  section: string;
};
