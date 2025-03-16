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

export default function PaymentForm({ form, language, formOptions }) {
  const translations = {
    title: language === "en" ? "Payment Information" : "معلومات الدفع",
    paymentCategories: language === "en" ? "Payment Categories" : "فئات الدفع",
    paymentCategoriesDesc:
      language === "en"
        ? "Select all payment categories you accept"
        : "حدد جميع فئات الدفع التي تقبلها",
    acceptedPayments:
      language === "en" ? "Accepted Payment Methods" : "طرق الدفع المقبولة",
    acceptedPaymentsDesc:
      language === "en"
        ? "Select all payment methods you accept"
        : "حدد جميع طرق الدفع التي تقبلها",
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-medium mb-4">{translations.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Payment Categories Section */}
          <FormField
            control={form.control}
            name="payment_categories"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">
                    {translations.paymentCategories}
                  </FormLabel>
                  <FormDescription className="text-sm">
                    {translations.paymentCategoriesDesc}
                  </FormDescription>
                </div>
                <div className="flex flex-col gap-3">
                  {formOptions?.payment_categories?.map((category) => (
                    <FormField
                      key={category.id}
                      control={form.control}
                      name="payment_categories"
                      render={({ field }) => (
                        <FormItem
                          className={`flex items-center space-x-3 w-full ${
                            language === "ar" ? "flex-row-reverse" : ""
                          }`}
                        >
                          <FormControl>
                            <Checkbox
                              className="h-5 w-5 rounded-md border-2 data-[state=checked]:bg-primary"
                              checked={field.value?.includes(category.id)}
                              onCheckedChange={(checked) => {
                                const current = field.value || [];
                                const updated = checked
                                  ? [...current, category.id]
                                  : current.filter(
                                      (value) => value !== category.id
                                    );
                                field.onChange(updated);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal flex-1">
                            {language === "en"
                              ? category.name
                              : category.name_ar}
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

          {/* Accepted Payments Section */}
          <FormField
            control={form.control}
            name="accepted_payments"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">
                    {translations.acceptedPayments}
                  </FormLabel>
                  <FormDescription className="text-sm">
                    {translations.acceptedPaymentsDesc}
                  </FormDescription>
                </div>
                <div className="flex flex-col gap-3">
                  {formOptions?.accepted_payments?.map((payment) => (
                    <FormField
                      key={payment.id}
                      control={form.control}
                      name="accepted_payments"
                      render={({ field }) => (
                        <FormItem
                          className={`flex items-center space-x-3 w-full ${
                            language === "ar" ? "flex-row-reverse" : ""
                          }`}
                        >
                          <FormControl>
                            <Checkbox
                              className="h-5 w-5 rounded-md border-2 data-[state=checked]:bg-primary"
                              checked={field.value?.includes(payment.id)}
                              onCheckedChange={(checked) => {
                                const current = field.value || [];
                                const updated = checked
                                  ? [...current, payment.id]
                                  : current.filter(
                                      (value) => value !== payment.id
                                    );
                                field.onChange(updated);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal flex-1">
                            {language === "en" ? payment.name : payment.name_ar}
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
        </div>
      </CardContent>
    </Card>
  );
}
