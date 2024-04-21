import {Advertisement} from '~/types/advertisements';
import {Badge} from '~/components/ui/badge';
import {daysFromToday} from '~/lib/utils';

const OfferListCard = ({
  title,
  salary,
  company,
  location,
  createdAt,
}: Advertisement) => {
  return (
    <div className="flex gap-3 py-6">
      <div className="w-[88px] h-[59px] bg-slate-500" />
      <div className="flex flex-1 justify-between">
        <div className="flex flex-col justify-between">
          <div className="text-lg font-medium">{title}</div>
          <div className="flex">
            <div className="text-sm">{company.name}</div>
            <div className="text-sm">{`${location.city}, ${location.country}`}</div>
          </div>
        </div>
        <div className="flex flex-col w-fit justify-between">
          {salary && salary.length > 0 && (
            <div className="text-lg font-medium">{`${salary[0].minSalary} - ${salary[0].maxSalary} ${salary[0].currency}`}</div>
          )}
          <div className="flex justify-end">
            <Badge variant="secondary" className="font-medium text-xs">
              {daysFromToday(createdAt) === 0
                ? 'New'
                : `${daysFromToday(createdAt)} days ago`}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferListCard;
