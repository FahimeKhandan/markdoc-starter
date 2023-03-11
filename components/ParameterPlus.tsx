import * as React from 'react';

export function ParameterPlus({ title, children,  details, importantInfo }) {
  return (
<div className="py-4 border-t border-gray-100">
    <div className="flex pb-2 ltr">
        <span v-if="title" className="text-body-1-bold text-gray-700 mr-1">{ title }</span>

        <span v-if="importantInfo" className="text-orange-400 text-caption-2 mr-1  uppercase mt-1">{ importantInfo }</span>
        <span v-if="details" className="text-gray-400 text-caption-2 mt-1">{ details }</span>

    </div>
    <div className="text-gray-600">
        {children}
    </div>
  </div>
  );
}
