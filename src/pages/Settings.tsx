
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [residenceName, setResidenceName] = useState("Mi Residencia");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Settings Saved",
      description: "Your preference changes have been saved.",
    });
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and settings
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="residence-name">Residence Name</Label>
                <Input
                  id="residence-name"
                  value={residenceName}
                  onChange={(e) => setResidenceName(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  This name will appear on all reports and communications.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Notification Preferences
                </h3>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={() =>
                      setEmailNotifications(!emailNotifications)
                    }
                  />
                  <div className="grid gap-1.5">
                    <Label
                      htmlFor="email-notifications"
                      className="font-medium"
                    >
                      Email Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive email notifications for important events.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="push-notifications"
                    checked={pushNotifications}
                    onCheckedChange={() =>
                      setPushNotifications(!pushNotifications)
                    }
                  />
                  <div className="grid gap-1.5">
                    <Label
                      htmlFor="push-notifications"
                      className="font-medium"
                    >
                      Push Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive push notifications for important events.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Appearance</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-md p-4 flex flex-col items-center justify-center space-y-2 hover:border-primary cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Blue</span>
                  </div>
                  <div className="border rounded-md p-4 flex flex-col items-center justify-center space-y-2 hover:border-primary cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-green-500"></div>
                    <span className="text-sm">Green</span>
                  </div>
                  <div className="border rounded-md p-4 flex flex-col items-center justify-center space-y-2 hover:border-primary cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-purple-500"></div>
                    <span className="text-sm">Purple</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Change Password</h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="outline">Change Password</Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account with two-factor
                authentication.
              </p>
              <div className="flex justify-end mt-4">
                <Button variant="outline">Enable 2FA</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
