import SocialLinkList from "../SocialLinkList";

export default function Footer() {
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

  return (
    <footer className="border-t border-white/20 bg-gradient-to-b from-stone-900 to-stone-950 to-50%">
      <div className="container relative mx-auto flex flex-col gap-4 px-4 pb-32 pt-8 md:flex-row md:items-start md:justify-between md:gap-0 md:px-0">
        <Copyright />
        <SocialLinkList />
      </div>
    </footer>
  );
}
