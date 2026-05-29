"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import {
  User,
  Bell,
  Monitor,
  Moon,
  Sun,
  Check,
  Save,
  CheckCircle2,
  Palette,
  Globe,
  Mail,
  FileText
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

/**
 * SettingsPage Component
 * Provides a tabbed management layout for Profile configurations,
 * customized application notifications, and theme/accent color appearance preferences.
 * Fully supports dark mode and responsive desktop/mobile viewports.
 *
 * @returns {React.ReactElement} The settings control center.
 */
export default function SettingsPage() {
  // next-themes setup
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Profile Form States
  const [fullName, setFullName] = React.useState<string>("John Doe");
  const [email, setEmail] = React.useState<string>("john@example.com");
  const [bio, setBio] = React.useState<string>("");
  const [website, setWebsite] = React.useState<string>("");
  const [profileSaved, setProfileSaved] = React.useState<boolean>(false);

  // Notification States
  const [emailNotifications, setEmailNotifications] = React.useState<boolean>(true);
  const [pushNotifications, setPushNotifications] = React.useState<boolean>(true);
  const [weeklyReport, setWeeklyReport] = React.useState<boolean>(true);
  const [productUpdates, setProductUpdates] = React.useState<boolean>(false);
  const [securityAlerts, setSecurityAlerts] = React.useState<boolean>(false);
  const [notificationsSaved, setNotificationsSaved] = React.useState<boolean>(false);

  // Appearance States
  const [accentColor, setAccentColor] = React.useState<string>("purple");

  // Defer rendering of theme active state to prevent hydration mismatches
  React.useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * Submits the Profile settings form.
   * Prevents standard browser submission and displays a premium inline success notification.
   *
   * @param {React.FormEvent} e - Form submission event.
   */
  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileSaved(true);
    setTimeout(() => {
      setProfileSaved(false);
    }, 3000);
  };

  /**
   * Saves notification preferences.
   * Displays visual confirmation of updated switch configurations.
   */
  const handleNotificationsSave = () => {
    setNotificationsSaved(true);
    setTimeout(() => {
      setNotificationsSaved(false);
    }, 3000);
  };

  // Static definition of accent colors
  const accentColors = [
    { name: "purple", className: "bg-purple-600 dark:bg-purple-500 focus:ring-purple-500/30" },
    { name: "blue", className: "bg-blue-600 dark:bg-blue-500 focus:ring-blue-500/30" },
    { name: "green", className: "bg-emerald-600 dark:bg-emerald-500 focus:ring-emerald-500/30" },
    { name: "orange", className: "bg-orange-500 dark:bg-orange-400 focus:ring-orange-500/30" },
    { name: "red", className: "bg-red-600 dark:bg-red-500 focus:ring-red-500/30" },
    { name: "pink", className: "bg-pink-600 dark:bg-pink-500 focus:ring-pink-500/30" },
  ];

  return (
    <div className="space-y-6">
      {/* Header and metadata details */}
      <div className="flex flex-col space-y-1.5 text-left">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Settings
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Manage your account configurations, subscription plans, and security choices.
        </p>
      </div>

      {/* Main Tab Container */}
      <Tabs defaultValue="profile" className="w-full space-y-6">
        {/* Navigation list for Tabs */}
        <TabsList className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1 flex w-full md:w-max md:inline-flex justify-start overflow-x-auto flex-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <TabsTrigger
            value="profile"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100 shrink-0"
          >
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100 shrink-0"
          >
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="appearance"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100 shrink-0"
          >
            <Palette className="h-4 w-4" />
            Appearance
          </TabsTrigger>
        </TabsList>

        {/* ==================== TAB 1: PROFILE ==================== */}
        <TabsContent value="profile" className="space-y-6 outline-none">
          <form onSubmit={handleProfileSave}>
            <Card className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm text-left">
              <CardHeader className="flex flex-row items-center gap-3 pb-6 border-b border-zinc-100 dark:border-zinc-800/60">
                <div className="p-2 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800/50 rounded-lg">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    Profile Information
                  </CardTitle>
                  <CardDescription className="text-sm text-zinc-500 dark:text-zinc-400">
                    Update your public user metadata details and email address.
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 pt-6">
                {/* Save Feedback Banner */}
                {profileSaved && (
                  <div className="flex items-center gap-2.5 p-3 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 rounded-lg text-sm transition-all duration-300 animate-in fade-in slide-in-from-top-1">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>Profile changes saved successfully! (Simulation)</span>
                  </div>
                )}

                {/* Avatar Uploader UI */}
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                  <div className="relative flex h-20 w-20 shrink-0 select-none items-center justify-center rounded-full bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300 border border-violet-200 dark:border-violet-800 text-2xl font-bold tracking-wider">
                    JD
                  </div>
                  <div className="flex flex-col gap-1.5 items-center sm:items-start text-center sm:text-left">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold"
                    >
                      Change Avatar
                    </Button>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      JPG, GIF or PNG. Max size of 2MB.
                    </p>
                  </div>
                </div>

                {/* Input Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullname" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      Full Name
                    </Label>
                    <Input
                      id="fullname"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-zinc-50/50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="emailaddress" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Input
                        id="emailaddress"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-zinc-50/50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 pl-9"
                        placeholder="john@example.com"
                        required
                      />
                      <Mail className="absolute left-3 top-2.5 h-4.5 w-4.5 text-zinc-400 dark:text-zinc-500" />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="website" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      Website
                    </Label>
                    <div className="relative">
                      <Input
                        id="website"
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="bg-zinc-50/50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 pl-9"
                        placeholder="https://yoursite.com"
                      />
                      <Globe className="absolute left-3 top-2.5 h-4.5 w-4.5 text-zinc-400 dark:text-zinc-500" />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      Bio
                    </Label>
                    <div className="relative">
                      <Textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="bg-zinc-50/50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 min-h-[100px] pl-9 pt-3"
                        placeholder="Tell us about yourself..."
                      />
                      <FileText className="absolute left-3 top-3 h-4.5 w-4.5 text-zinc-400 dark:text-zinc-500" />
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t border-zinc-100 dark:border-zinc-800/60 pt-4 flex justify-end">
                <Button
                  type="submit"
                  className="bg-violet-600 hover:bg-violet-700 text-white dark:bg-violet-500 dark:hover:bg-violet-600 dark:text-zinc-950 font-semibold flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        {/* ==================== TAB 2: NOTIFICATIONS ==================== */}
        <TabsContent value="notifications" className="space-y-6 outline-none">
          <Card className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm text-left">
            <CardHeader className="flex flex-row items-center gap-3 pb-6 border-b border-zinc-100 dark:border-zinc-800/60">
              <div className="p-2 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800/50 rounded-lg">
                <Bell className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Notification Settings
                </CardTitle>
                <CardDescription className="text-sm text-zinc-500 dark:text-zinc-400">
                  Configure when and how you receive alerts and communications.
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="pt-6 space-y-6">
              {/* Save Feedback Banner */}
              {notificationsSaved && (
                <div className="flex items-center gap-2.5 p-3 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 rounded-lg text-sm transition-all duration-300 animate-in fade-in slide-in-from-top-1">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>Notification preferences saved successfully! (Simulation)</span>
                </div>
              )}

              {/* Toggles Container */}
              <div className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                {/* Email Notifications */}
                <div className="flex items-center justify-between py-4">
                  <div className="space-y-0.5 max-w-[80%]">
                    <Label htmlFor="email-notifications" className="text-base font-semibold text-zinc-900 dark:text-zinc-100 cursor-pointer">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                    className="data-[state=checked]:bg-violet-600 dark:data-[state=checked]:bg-violet-500"
                  />
                </div>

                {/* Push Notifications */}
                <div className="flex items-center justify-between py-4">
                  <div className="space-y-0.5 max-w-[80%]">
                    <Label htmlFor="push-notifications" className="text-base font-semibold text-zinc-900 dark:text-zinc-100 cursor-pointer">
                      Push Notifications
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Browser push notifications
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                    className="data-[state=checked]:bg-violet-600 dark:data-[state=checked]:bg-violet-500"
                  />
                </div>

                {/* Weekly Report */}
                <div className="flex items-center justify-between py-4">
                  <div className="space-y-0.5 max-w-[80%]">
                    <Label htmlFor="weekly-report" className="text-base font-semibold text-zinc-900 dark:text-zinc-100 cursor-pointer">
                      Weekly Report
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Get a summary every Monday
                    </p>
                  </div>
                  <Switch
                    id="weekly-report"
                    checked={weeklyReport}
                    onCheckedChange={setWeeklyReport}
                    className="data-[state=checked]:bg-violet-600 dark:data-[state=checked]:bg-violet-500"
                  />
                </div>

                {/* Product Updates */}
                <div className="flex items-center justify-between py-4">
                  <div className="space-y-0.5 max-w-[80%]">
                    <Label htmlFor="product-updates" className="text-base font-semibold text-zinc-900 dark:text-zinc-100 cursor-pointer">
                      Product Updates
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      New features and announcements
                    </p>
                  </div>
                  <Switch
                    id="product-updates"
                    checked={productUpdates}
                    onCheckedChange={setProductUpdates}
                    className="data-[state=checked]:bg-violet-600 dark:data-[state=checked]:bg-violet-500"
                  />
                </div>

                {/* Security Alerts */}
                <div className="flex items-center justify-between py-4">
                  <div className="space-y-0.5 max-w-[80%]">
                    <Label htmlFor="security-alerts" className="text-base font-semibold text-zinc-900 dark:text-zinc-100 cursor-pointer">
                      Security Alerts
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Important account security notices
                    </p>
                  </div>
                  <Switch
                    id="security-alerts"
                    checked={securityAlerts}
                    onCheckedChange={setSecurityAlerts}
                    className="data-[state=checked]:bg-violet-600 dark:data-[state=checked]:bg-violet-500"
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="border-t border-zinc-100 dark:border-zinc-800/60 pt-4 flex justify-end">
              <Button
                onClick={handleNotificationsSave}
                className="bg-violet-600 hover:bg-violet-700 text-white dark:bg-violet-500 dark:hover:bg-violet-600 dark:text-zinc-950 font-semibold flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* ==================== TAB 3: APPEARANCE ==================== */}
        <TabsContent value="appearance" className="space-y-6 outline-none">
          <Card className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm text-left">
            <CardHeader className="flex flex-row items-center gap-3 pb-6 border-b border-zinc-100 dark:border-zinc-800/60">
              <div className="p-2 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800/50 rounded-lg">
                <Palette className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Appearance Settings
                </CardTitle>
                <CardDescription className="text-sm text-zinc-500 dark:text-zinc-400">
                  Personalize the interface theme mode and dashboard accent coloring.
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="pt-6 space-y-8">
              {/* Section 1: Theme Choice */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                  Theme
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Light Theme Option Card */}
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={`flex flex-col items-center gap-3 rounded-xl border p-5 text-center transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/20 ${
                      mounted && theme === "light"
                        ? "border-violet-600 bg-violet-50/20 dark:border-violet-500 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 shadow-sm"
                        : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    <div className={`p-2.5 rounded-full ${mounted && theme === "light" ? "bg-violet-100 dark:bg-violet-900/50" : "bg-zinc-100 dark:bg-zinc-800"}`}>
                      <Sun className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Light</span>
                      <span className="text-xs text-zinc-400">Standard light styling</span>
                    </div>
                  </button>

                  {/* Dark Theme Option Card */}
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={`flex flex-col items-center gap-3 rounded-xl border p-5 text-center transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/20 ${
                      mounted && theme === "dark"
                        ? "border-violet-600 bg-violet-50/20 dark:border-violet-500 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 shadow-sm"
                        : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    <div className={`p-2.5 rounded-full ${mounted && theme === "dark" ? "bg-violet-100 dark:bg-violet-900/50" : "bg-zinc-100 dark:bg-zinc-800"}`}>
                      <Moon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Dark</span>
                      <span className="text-xs text-zinc-400">Easy on the eyes</span>
                    </div>
                  </button>

                  {/* System Theme Option Card */}
                  <button
                    type="button"
                    onClick={() => setTheme("system")}
                    className={`flex flex-col items-center gap-3 rounded-xl border p-5 text-center transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/20 ${
                      mounted && theme === "system"
                        ? "border-violet-600 bg-violet-50/20 dark:border-violet-500 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 shadow-sm"
                        : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    <div className={`p-2.5 rounded-full ${mounted && theme === "system" ? "bg-violet-100 dark:bg-violet-900/50" : "bg-zinc-100 dark:bg-zinc-800"}`}>
                      <Monitor className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">System</span>
                      <span className="text-xs text-zinc-400">Match operating system</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Section 2: Accent Colors */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                  Accent Color
                </h3>
                <div className="flex flex-wrap gap-4 items-center">
                  {accentColors.map((color) => {
                    const isSelected = accentColor === color.name;
                    return (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setAccentColor(color.name)}
                        className={`group relative h-10 w-10 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 ${color.className} ${
                          isSelected ? "ring-2 ring-zinc-900 dark:ring-zinc-100" : ""
                        }`}
                        aria-label={`Select ${color.name} accent color`}
                      >
                        {isSelected && (
                          <Check className="h-5 w-5 text-white animate-in zoom-in-75 duration-200" />
                        )}
                        <span className="absolute -bottom-6 text-[10px] capitalize font-medium text-zinc-400 dark:text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          {color.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

