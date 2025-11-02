import { Card, CardContent, Checkbox, FormField, FormTextArea, Label } from "@/components/common";
import { UIButton } from "@/components/ui";
import { Inbox, MailIcon, MapPinIcon, MessageCircle, PhoneIcon, User2Icon } from "lucide-react";
import Link from "next/link";

const HomeContact = () => (
  <div id="contact" className="max-w-(--breakpoint-xl) mx-auto w-full py-14 px-4 sm:px-6">
    <p className="text-muted-foreground md:text-center uppercase font-semibold text-sm">Contact Us</p>
    <h2 className="mt-3 text-4xl md:text-5xl md:text-center font-semibold tracking-tight">
      Chat with our friendly team!
    </h2>
    <p className="mt-3 text-base md:text-center sm:text-lg text-muted-foreground">
      We&apos;d love to hear from you. Please fill out this form or shoot us an email.
    </p>
    <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
        <div>
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Email</h3>
          <p className="my-2.5 text-muted-foreground">Our friendly team is here to help.</p>
          <Link className="font-medium text-primary" href="mailto:akashmoradiya3444@gmail.com">
            email@example.com
          </Link>
        </div>
        <div>
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <MessageCircle />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Live chat</h3>
          <p className="my-2.5 text-muted-foreground">Our friendly team is here to help.</p>
          <Link className="font-medium text-primary" href="#">
            Start new chat
          </Link>
        </div>
        <div>
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Office</h3>
          <p className="my-2.5 text-muted-foreground">Come say hello at our office HQ.</p>
          <Link className="font-medium text-primary" href="https://map.google.com" target="_blank">
            123 Main City, TST <br /> TXC 3966 PH
          </Link>
        </div>
        <div>
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Phone</h3>
          <p className="my-2.5 text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
          <Link className="font-medium text-primary" href="tel:akashmoradiya3444@gmail.com">
            +1 (555) 000-0000
          </Link>
        </div>
      </div>

      {/* Form */}
      <Card className="shadow-none py-0 border-none">
        <CardContent className="p-0! sm:p-4!">
          <form>
            <div className="space-y-3">
              <div className="grid md:grid-cols-2 gap-x-3 gap-y-6">
                <FormField
                  label="First Name"
                  name="firstname"
                  placeholder="John"
                  className="h-11 sm:h-12"
                  type="text"
                  autoComplete="new-fullname"
                  iconLeft={<User2Icon className="h-4 w-4" />}
                  required
                />
                <FormField
                  label="Last Name"
                  name="lastname"
                  placeholder="Doe"
                  className="h-11 sm:h-12"
                  type="text"
                  autoComplete="new-fullname"
                  iconLeft={<User2Icon className="h-4 w-4" />}
                  required
                />
              </div>

              <FormField
                label="Email"
                name="email"
                placeholder="name@example.com"
                className="h-11 sm:h-12"
                type="text"
                autoComplete="new-email"
                iconLeft={<Inbox className="h-4 w-4" />}
                required
              />
              <FormTextArea label="Message for us" name="message" rows={7} placeholder="Enter your message" required />

              <div className="col-span-2 flex items-center gap-2 mt-8">
                <Checkbox id="acceptTerms" className="bg-background" />
                <Label htmlFor="acceptTerms" className="gap-0">
                  You agree to our
                  <Link href="#" className="underline ml-1">
                    terms and conditions
                  </Link>
                  <span>.</span>
                </Label>
              </div>
            </div>
            <UIButton text="Submit" loadingText="Submitting..." className="h-11 sm:h-12 rounded-xl" />
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
);
export default HomeContact;
