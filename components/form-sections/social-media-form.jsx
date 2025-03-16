"use client"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"

export default function SocialMediaForm({ form, language }) {
  const translations = {
    title: language === "en" ? "Social Media & Online Presence" : "وسائل التواصل الاجتماعي والتواجد عبر الإنترنت",
    website: language === "en" ? "Website" : "الموقع الإلكتروني",
    websiteDesc: language === "en" ? "Your official website URL" : "رابط موقعك الرسمي",
    facebook: language === "en" ? "Facebook" : "فيسبوك",
    facebookDesc: language === "en" ? "Your Facebook page URL" : "رابط صفحتك على فيسبوك",
    instagram: language === "en" ? "Instagram" : "انستغرام",
    instagramDesc: language === "en" ? "Your Instagram profile URL" : "رابط حسابك على انستغرام",
    youtube: language === "en" ? "YouTube" : "يوتيوب",
    youtubeDesc: language === "en" ? "Your YouTube channel URL" : "رابط قناتك على يوتيوب",
    tiktok: language === "en" ? "TikTok" : "تيك توك",
    tiktokDesc: language === "en" ? "Your TikTok profile URL" : "رابط حسابك على تيك توك",
    snapchat: language === "en" ? "Snapchat" : "سناب شات",
    snapchatDesc: language === "en" ? "Your Snapchat username or URL" : "اسم المستخدم أو رابط حسابك على سناب شات",
    onlineFingerprints: language === "en" ? "Other Online Presence" : "تواجد آخر عبر الإنترنت",
    onlineFingerprintsDesc:
      language === "en"
        ? "Add other online platforms where your facility is listed"
        : "أضف منصات أخرى عبر الإنترنت حيث يتم إدراج منشأتك",
    addFingerprint: language === "en" ? "Add Online Presence" : "إضافة تواجد عبر الإنترنت",
    name: language === "en" ? "Platform Name" : "اسم المنصة",
    description: language === "en" ? "Description" : "الوصف",
    url: language === "en" ? "URL" : "الرابط",
    remove: language === "en" ? "Remove" : "إزالة",
  }

  const { online_fingerprints } = form.watch()

  const addFingerprint = () => {
    const currentFingerprints = form.getValues("online_fingerprints") || []
    form.setValue("online_fingerprints", [...currentFingerprints, { name: "", description: "", url: "" }])
  }

  const removeFingerprint = (index) => {
    const currentFingerprints = form.getValues("online_fingerprints") || []
    form.setValue(
      "online_fingerprints",
      currentFingerprints.filter((_, i) => i !== index),
    )
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-medium mb-4">{translations.title}</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="social_media_accounts.website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.website}</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.example.com" {...field} />
                </FormControl>
                <FormDescription>{translations.websiteDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="social_media_accounts.facebook"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.facebook}</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.facebook.com/yourpage" {...field} />
                </FormControl>
                <FormDescription>{translations.facebookDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="social_media_accounts.instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.instagram}</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.instagram.com/youraccount" {...field} />
                </FormControl>
                <FormDescription>{translations.instagramDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="social_media_accounts.youtube"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.youtube}</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.youtube.com/c/yourchannel" {...field} />
                </FormControl>
                <FormDescription>{translations.youtubeDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="social_media_accounts.tiktok"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.tiktok}</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.tiktok.com/@youraccount" {...field} />
                </FormControl>
                <FormDescription>{translations.tiktokDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="social_media_accounts.snapchat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.snapchat}</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.snapchat.com/add/yourusername" {...field} />
                </FormControl>
                <FormDescription>{translations.snapchatDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">{translations.onlineFingerprints}</h4>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addFingerprint}
              className="flex items-center gap-1"
            >
              <Plus className="h-4 w-4" />
              {translations.addFingerprint}
            </Button>
          </div>
          <FormDescription className="mt-0">{translations.onlineFingerprintsDesc}</FormDescription>

          {online_fingerprints?.map((_, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 items-start border rounded-md p-4">
              <div className="col-span-12 md:col-span-3">
                <FormField
                  control={form.control}
                  name={`online_fingerprints.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{translations.name}</FormLabel>
                      <FormControl>
                        <Input placeholder="Tripadvisor" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-12 md:col-span-4">
                <FormField
                  control={form.control}
                  name={`online_fingerprints.${index}.description`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{translations.description}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={language === "en" ? "Brief description..." : "وصف موجز..."}
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-10 md:col-span-4">
                <FormField
                  control={form.control}
                  name={`online_fingerprints.${index}.url`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{translations.url}</FormLabel>
                      <FormControl>
                        <Input placeholder="https://www.tripadvisor.com/..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-2 md:col-span-1 flex items-end justify-end h-full pb-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFingerprint(index)}
                  className="text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">{translations.remove}</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

