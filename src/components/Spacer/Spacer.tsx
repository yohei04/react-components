import { FC } from 'react'
import utilStyles from 'styles/base/Utils.module.scss'
import clsx from 'clsx'

type SizeType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface SpacerProps {
  mt?: SizeType
  sm_mt?: SizeType
  md_mt?: SizeType
  ml?: SizeType
  sm_ml?: SizeType
  md_ml?: SizeType
  display?: 'block' | 'inline-block'
}

export const Spacer: FC<SpacerProps> = ({
  mt,
  sm_mt,
  md_mt,
  ml,
  sm_ml,
  md_ml,
  display = 'block',
}) => {
  const height = display === 'block' ? '' : 1

  return (
    <span
      style={{ display: display, height: height }}
      className={clsx(
        mt && utilStyles[`mt_${mt}`],
        sm_mt && utilStyles[`sm_mt_${sm_mt}`],
        md_mt && utilStyles[`md_mt_${md_mt}`],
        ml && utilStyles[`ml_${ml}`],
        sm_ml && utilStyles[`sm_ml_${sm_ml}`],
        md_ml && utilStyles[`md_ml_${md_ml}`]
      )}
    ></span>
  )
}
