"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

export default function AdvantagesForm({ form, language, formOptions }) {
  const translations = {
    title: language === "en" ? "Advantages & Services" : "المزايا والخدمات",
    competitiveAdvantages:
      language === "en" ? "Competitive Advantages" : "المزايا التنافسية",
    competitiveAdvantagesDesc:
      language === "en"
        ? "Select all advantages that apply to your facility"
        : "حدد جميع المزايا التي تنطبق على منشأتك",
    clientTypes: language === "en" ? "Client Types" : "أنواع العملاء",
    clientTypesDesc:
      language === "en"
        ? "Select all client types you cater to"
        : "حدد جميع أنواع العملاء الذين تخدمهم",
    extraServices: language === "en" ? "Extra Services" : "خدمات إضافية",
    extraServicesDesc:
      language === "en"
        ? "Select all extra services you offer"
        : "حدد جميع الخدمات الإضافية التي تقدمها",
    languageSupports: language === "en" ? "Language Support" : "دعم اللغات",
    languageSupportsDesc:
      language === "en"
        ? "Select all languages supported at your facility"
        : "حدد جميع اللغات المدعومة في منشأتك",
    culturalShows: language === "en" ? "Cultural Shows" : "العروض الثقافية",
    culturalShowsDesc:
      language === "en"
        ? "Select all cultural shows you offer"
        : "حدد جميع العروض الثقافية التي تقدمها",
    specialDiscount:
      language === "en" ? "Special Discount for Companies" : "خصم خاص للشركات",
    specialDiscountDesc:
      language === "en"
        ? "Do you offer special discounts for corporate clients?"
        : "هل تقدم خصومات خاصة للعملاء من الشركات؟",
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-medium mb-4">{translations.title}</h3>

        <FormField
          control={form.control}
          name="have_special_discount_to_companies"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 mb-6">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  {translations.specialDiscount}
                </FormLabel>
                <FormDescription>
                  {translations.specialDiscountDesc}
                </FormDescription>
              </div>
              <FormControl>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  className="bg-white border-gray-300 rounded transition-colors w-4 h-4 transform scale-125"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="competitive_advantages"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>{translations.competitiveAdvantages}</FormLabel>
                  <FormDescription>
                    {translations.competitiveAdvantagesDesc}
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {formOptions?.competitive_advantages?.map((advantage) => (
                    <FormField
                      key={advantage.id}
                      control={form.control}
                      name="competitive_advantages"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={advantage.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(advantage.id)} // Checks if the advantage.id is in the array
                                onCheckedChange={(checked) => {
                                  // Update the array of selected advantages based on whether the checkbox is checked or unchecked
                                  const current = field.value || []; // Get the current value (array)
                                  const updated = checked
                                    ? [...current, advantage.id] // If checked, add the ID
                                    : current.filter(
                                        (value) => value !== advantage.id
                                      ); // If unchecked, remove the ID
                                  field.onChange(updated); // Update the field value with the new array
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {language === "en"
                                ? advantage.name
                                : advantage.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="client_types"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>{translations.clientTypes}</FormLabel>
                  <FormDescription>
                    {translations.clientTypesDesc}
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {formOptions?.client_types?.map((type) => (
                    <FormField
                      key={type.id}
                      control={form.control}
                      name="client_types"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={type.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(type.id)}
                                onCheckedChange={(checked) => {
                                  const current = field.value || [];
                                  const updated = checked
                                    ? [...current, type.id]
                                    : current.filter(
                                        (value) => value !== type.id
                                      );
                                  field.onChange(updated);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {language === "en" ? type.name : type.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="extra_services"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>{translations.extraServices}</FormLabel>
                  <FormDescription>
                    {translations.extraServicesDesc}
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {formOptions?.extra_services?.map((service) => (
                    <FormField
                      key={service.id}
                      control={form.control}
                      name="extra_services"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={service.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(service.id)}
                                onCheckedChange={(checked) => {
                                  const current = field.value || [];
                                  const updated = checked
                                    ? [...current, service.id]
                                    : current.filter(
                                        (value) => value !== service.id
                                      );
                                  field.onChange(updated);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {language === "en" ? service.name : service.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="language_supports"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>{translations.languageSupports}</FormLabel>
                  <FormDescription>
                    {translations.languageSupportsDesc}
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {formOptions?.language_supports?.map((language_support) => (
                    <FormField
                      key={language_support.id}
                      control={form.control}
                      name="language_supports"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={language_support.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  language_support.id
                                )}
                                onCheckedChange={(checked) => {
                                  const current = field.value || [];
                                  const updated = checked
                                    ? [...current, language_support.id]
                                    : current.filter(
                                        (value) => value !== language_support.id
                                      );
                                  field.onChange(updated);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {language === "en"
                                ? language_support.name
                                : language_support.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cultural_shows"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>{translations.culturalShows}</FormLabel>
                  <FormDescription>
                    {translations.culturalShowsDesc}
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {formOptions?.cultural_shows?.map((show) => (
                    <FormField
                      key={show.id}
                      control={form.control}
                      name="cultural_shows"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={show.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(show.id)}
                                onCheckedChange={(checked) => {
                                  const current = field.value || [];
                                  const updated = checked
                                    ? [...current, show.id]
                                    : current.filter(
                                        (value) => value !== show.id
                                      );
                                  field.onChange(updated);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {language === "en" ? show.name : show.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
