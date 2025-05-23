"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function BasicInfoForm({ form, language, formOptions }) {
  const translations = {
    title: language === "en" ? "Basic Information" : "المعلومات الأساسية",
    name: language === "en" ? "Facility Name" : "اسم المنشأة",
    nameDesc:
      language === "en"
        ? "Enter the official name of your facility"
        : "أدخل الاسم الرسمي لمنشأتك",
    email: language === "en" ? "Email Address" : "البريد الإلكتروني",
    emailDesc:
      language === "en"
        ? "Contact email for your facility"
        : "البريد الإلكتروني للتواصل مع منشأتك",
    phone: language === "en" ? "Phone Number" : "رقم الهاتف",
    phoneDesc:
      language === "en"
        ? "Contact phone number for your facility"
        : "رقم الهاتف للتواصل مع منشأتك",
    category: language === "en" ? "Facility Category" : "فئة المنشأة",
    categoryDesc:
      language === "en"
        ? "Select the category that best describes your facility"
        : "اختر الفئة التي تصف منشأتك بشكل أفضل",
    video:
      language === "en" ? "Promotional Video URL" : "رابط الفيديو الترويجي",
    videoDesc:
      language === "en"
        ? "Link to a video showcasing your facility (YouTube, Vimeo, etc.)"
        : "رابط لفيديو يعرض منشأتك (يوتيوب، فيميو، إلخ)",
  };

  return (
    <Card>
      <CardContent className="pt-6">
        {/* Title */}
        <h3 className="text-lg font-medium mb-4">{translations.title}</h3>

        {/* Form Fields */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Facility Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.name}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      language === "en"
                        ? "Enter facility name"
                        : "أدخل اسم المنشأة"
                    }
                    {...field}
                  />
                </FormControl>
                <FormDescription>{translations.nameDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.email}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@domain.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>{translations.emailDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.phone}</FormLabel>
                <FormControl>
                  <Input placeholder="+1234567890" {...field} />
                </FormControl>
                <FormDescription>{translations.phoneDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.category}</FormLabel>
                <Select
                  onValueChange={(value) =>
                    field.onChange(Number.parseInt(value))
                  }
                  value={field.value?.toString() || ""}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          language === "en" ? "Select a category" : "اختر فئة"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {formOptions?.categories?.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id.toString()}
                        className="bg-white w-[200px] hover:bg-gray-300 ml-2"
                      >
                        {language === "en" ? category.name : category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>{translations.categoryDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Video */}
          <FormField
            control={form.control}
            name="video"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>{translations.video}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://youtube.com/watch?v=..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>{translations.videoDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
