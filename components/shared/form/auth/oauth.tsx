import { Button, Input } from "@/components/common";
import { IconGoogle } from "@/components/icons";

export const OauthSignIn = () => {
  const oAuthProviders = [
    {
      name: "github",
      displayName: "Sign in with Google",
      icon: <IconGoogle className="h-6 w-6" />,
    },
  ];

  return (
    <div className="mt-4">
      {oAuthProviders.map((provider) => (
        <form key={provider.name} className="pb-2">
          <Input type="hidden" name="provider" value={provider.name} />
          <Button variant="outline" type="submit" className="w-full text-zinc-950 py-6 dark:text-white">
            <span className="mr-2">{provider.icon}</span>
            <span>{provider.displayName}</span>
          </Button>
        </form>
      ))}
    </div>
  );
};
