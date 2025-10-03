import type {FunctionComponent} from "react";
import {Page} from "@/components/layouts/Page.tsx";
import {useTranslation} from "react-i18next";
import {Content} from "@/components/Content.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChevronLeft} from "lucide-react";
import {useNavigate} from "react-router";
import {useBooking} from "@/pages/booking/BookingContext.tsx";

export const BookingReview: FunctionComponent = () => {
  const {t} = useTranslation();
  const {bookingFormValues} = useBooking();
  const navigate = useNavigate();
  return (
    <Page title={t('public.Review.Title')}>
      <Content className="mt-24">
        <Button onClick={() => navigate('/booking')} className="mb-3" variant="ghost"><ChevronLeft/>Bearbeiten</Button>
        <h1 className="text-4xl font-semibold">{t('public.Review.Title')}</h1>
        <div className="grid grid-cols-2 mt-3">
          {bookingFormValues.dateRange && (
            <>
              <div className="col-span-1">
                <h3>{t('public.Forms.Labels.CheckIn')}</h3>
                <b>{bookingFormValues.dateRange.from.toLocaleDateString()}</b>
              </div>
              <div className="col-span-1">
                <h3>{t('public.Forms.Labels.CheckOut')}</h3>
                <b>{bookingFormValues.dateRange.to?.toLocaleDateString()}</b>
              </div>
            </>
          )}
        </div>
      </Content>
    </Page>
  )
}
