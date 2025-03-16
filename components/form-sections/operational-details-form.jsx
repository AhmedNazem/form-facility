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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";

export default function OperationalDetailsForm({
  form,
  language,
  formOptions,
}) {
  const translations = {
    title: language === "en" ? "Operational Details" : "تفاصيل التشغيل",
    alwaysOpen: language === "en" ? "Always Open" : "مفتوح دائمًا",
    alwaysOpenDesc:
      language === "en"
        ? "Is your facility open 24/7?"
        : "هل منشأتك مفتوحة على مدار الساعة؟",
    workingHours: language === "en" ? "Working Hours" : "ساعات العمل",
    addHours: language === "en" ? "Add Working Hours" : "إضافة ساعات عمل",
    day: language === "en" ? "Day" : "اليوم",
    startTime: language === "en" ? "Start Time" : "وقت البدء",
    endTime: language === "en" ? "End Time" : "وقت الانتهاء",
    remove: language === "en" ? "Remove" : "إزالة",
    seasonalChange:
      language === "en"
        ? "Seasonal Working Hour Changes"
        : "تغييرات ساعات العمل الموسمية",
    seasonalChangeDesc:
      language === "en"
        ? "Describe any seasonal changes to your working hours"
        : "صف أي تغييرات موسمية في ساعات عملك",
    cancellationPolicy:
      language === "en" ? "Cancellation Policy" : "سياسة الإلغاء",
    cancellationPolicyDesc:
      language === "en"
        ? "Describe your cancellation policy"
        : "صف سياسة الإلغاء الخاصة بك",
    reservationTypes: language === "en" ? "Reservation Types" : "أنواع الحجز",
    reservationTypesDesc:
      language === "en"
        ? "Select all applicable reservation types"
        : "حدد جميع أنواع الحجز المطبقة",
    days: [
      language === "en" ? "Sunday" : "الأحد",
      language === "en" ? "Monday" : "الاثنين",
      language === "en" ? "Tuesday" : "الثلاثاء",
      language === "en" ? "Wednesday" : "الأربعاء",
      language === "en" ? "Thursday" : "الخميس",
      language === "en" ? "Friday" : "الجمعة",
      language === "en" ? "Saturday" : "السبت",
    ],
  };

  const { working_hour } = form.watch("operational_details");

  const addWorkingHour = () => {
    const currentHours =
      form.getValues("operational_details.working_hour") || [];
    form.setValue("operational_details.working_hour", [
      ...currentHours,
      { day_of_week: 0, start_time: "09:00", end_time: "17:00" },
    ]);
  };

  const removeWorkingHour = (index) => {
    const currentHours =
      form.getValues("operational_details.working_hour") || [];
    form.setValue(
      "operational_details.working_hour",
      currentHours.filter((_, i) => i !== index)
    );
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-medium mb-4">{translations.title}</h3>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="operational_details.is_always_open"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    {translations.alwaysOpen}
                  </FormLabel>
                  <FormDescription>
                    {translations.alwaysOpenDesc}
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

          {!form.watch("operational_details.is_always_open") && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">
                  {translations.workingHours}
                </h4>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addWorkingHour}
                  className="flex items-center gap-1"
                >
                  <Plus className="h-4 w-4" />
                  {translations.addHours}
                </Button>
              </div>

              {working_hour?.map((_, index) => (
                <div key={index} className="grid grid-cols-12 gap-4 items-end">
                  <div className="col-span-4">
                    <FormField
                      control={form.control}
                      name={`operational_details.working_hour.${index}.day_of_week`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{translations.day}</FormLabel>
                          <Select
                            onValueChange={(value) =>
                              field.onChange(Number.parseInt(value))
                            }
                            value={field.value.toString()}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={
                                    language === "en"
                                      ? "Select day"
                                      : "اختر اليوم"
                                  }
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {translations.days.map((day, i) => (
                                <SelectItem
                                  className="bg-white w-[200px] hover:bg-gray-300"
                                  key={i}
                                  value={i.toString()}
                                >
                                  {day}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-3">
                    <FormField
                      control={form.control}
                      name={`operational_details.working_hour.${index}.start_time`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{translations.startTime}</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-3">
                    <FormField
                      control={form.control}
                      name={`operational_details.working_hour.${index}.end_time`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{translations.endTime}</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeWorkingHour(index)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">{translations.remove}</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <FormField
            control={form.control}
            name="operational_details.reservation_types"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>{translations.reservationTypes}</FormLabel>
                  <FormDescription>
                    {translations.reservationTypesDesc}
                  </FormDescription>
                </div>
                <div className="flex flex-col gap-3">
                  {" "}
                  {/* Added column container */}
                  {formOptions?.reservation_types?.map((type) => (
                    <FormField
                      key={type.id}
                      control={form.control}
                      name="operational_details.reservation_types"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 w-full">
                          {" "}
                          {/* Added w-full */}
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
                          <FormLabel className="font-normal flex-1">
                            {" "}
                            {/* Added flex-1 */}
                            {type.name}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="operational_details.seasonal_working_hour_change"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.seasonalChange}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={
                      language === "en"
                        ? "Describe seasonal changes..."
                        : "وصف التغييرات الموسمية..."
                    }
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {translations.seasonalChangeDesc}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="operational_details.cancellation_policy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.cancellationPolicy}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={
                      language === "en"
                        ? "Describe your cancellation policy..."
                        : "وصف سياسة الإلغاء الخاصة بك..."
                    }
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {translations.cancellationPolicyDesc}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
