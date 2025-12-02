import { useTranslations } from "next-intl";

type Props = {
    current: number;
    total: number;
    onPrevious: () => void;
}

function CMIResultHeader({ current, total, onPrevious }: Props) {
  const t = useTranslations("cmi.ui");
    
  return (
      <div className="w-full h-[200px] bg-marble rounded-b-3xl text-foreground">
          <div className='flex flex-col items-center justify-center text-center h-full space-y-2 mt-1'>
              <h1 className='font-bold text-foreground/90 text-xl'>{t('header_title')}</h1>
              <p className='text-xs text-foreground/65 max-w-[320px]'>
                  <span className='font-semibold'>
                      {t('header_desc_1')}
                  </span>
                  {" "}
                  {t('header_desc_2')}
              </p>
          </div>
     </div>
  )
}

export default CMIResultHeader