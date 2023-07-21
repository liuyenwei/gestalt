// @flow strict
import { type Node, useState } from 'react';
import { Flex } from 'gestalt';
import { DateRange } from 'gestalt-datepicker';

export default function Example(): Node {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <Flex alignItems="start" height="100%" justifyContent="center" width="100%">
      <DateRange
        startDateValue={startDate}
        endDateValue={endDate}
        onStartDateChange={({ value }) => setStartDate(value)}
        onEndDateChange={({ value }) => setEndDate(value)}
        onStartDateError={() => {}}
        onEndDateError={() => {}}
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    </Flex>
  );
}