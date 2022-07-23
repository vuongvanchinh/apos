import Button from '@/components/core/button'
import { useTransHook } from '@/locales/hooks'
import React from 'react'

const CreateActions = () => {
    const { t } = useTransHook()

    return (
        <div className="flex justify-end gap-[30px]">
            <Button className="btn-pri-outline !rounded-[10px] !px-6 py-4 !text-base">
                {t('CANCEL')}
            </Button>
            <Button className="!rounded-[10px] !px-7 py-4 !text-base">
                {t('SAVE_AND_SHOW')}
            </Button>
        </div>
    )
}

export default CreateActions