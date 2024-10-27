import SocialLinkList from "./SocialLinkList";

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-gradient-to-t from-stone-900 to-stone-950 to-50%">
      <div className="container relative mx-auto flex flex-col gap-4 px-4 pb-32 pt-8 md:flex-row md:items-start md:justify-between md:gap-0 xl:px-0">
        <Copyright />
        <SocialLinkList />
      </div>
    </footer>
  );
}

const Copyright = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="space-y-2 text-pretty text-sm text-stone-400">
      <p>&copy; {getCurrentYear()} Edward Vonschondorf</p>
      <p>Designed and Developed by Edward Vonschondorf</p>
    </div>
  );
};
