import localFont from 'next/font/local';

export const generalSans = localFont({
    src: [
        {
            path: '../../public/font/GeneralSans/GeneralSans-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/font/GeneralSans/GeneralSans-Semibold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/font/GeneralSans/GeneralSans-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/font/GeneralSans/GeneralSans-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/font/GeneralSans/GeneralSans-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/font/GeneralSans/GeneralSans-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/font/GeneralSans/GeneralSans-Extralight.ttf',
            weight: '200',
            style: 'normal',
        },
    ],
});