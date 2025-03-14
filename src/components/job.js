import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Job = ({ offer, locale }) => {
  // Formato de salario con "million/millón/millones" según idioma
  const formattedSalary =
    locale.startsWith("es")
      ? `${offer.salary} ${offer.salary === 1 ? "millón" : "millones"}`
      : `${offer.salary} million`;

  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>{offer.name}</td>
      <td>{offer.company}</td>
      <td>{formattedSalary}</td>
      <td>{offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={offer.visits} />
      </td>
    </tr>
  );
};

export default Job;

