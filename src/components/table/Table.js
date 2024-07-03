import clsx from "clsx";
import React from "react";

import "./Table.css";

export default function Table({
  config = {},
  content = [],
  className,
  style,
  width = "100%",
  height = "fit-content",
  onRowSelect = (row) => {},
  ...props
}) {
  const headerTitles = Object.values(config);
  const contentObjectKeys = Object.keys(config);

  return (
    <div
      className={clsx("table--container", className)}
      style={{
        "--table-container-width": width,
        "--table-container-height": height,
        ...style,
      }}
      {...props}
    >
      <table>
        <thead>
          <tr className={clsx("table_row--header")}>
            {headerTitles.map((title, index) => {
              return (
                <td
                  key={`${index}@${title}@${Math.random()}`}
                  className={clsx("table_col--header")}
                >
                  {title}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {content.map((row) => {
            return (
              <tr
                key={row.key}
                className={clsx("table_row--content")}
                onClick={() => {
                  onRowSelect(row);
                }}
              >
                {contentObjectKeys.map((key) => {
                  return (
                    <td
                      key={`${row.key}@${key}@${Math.random()}`}
                      className={clsx("table_col--content")}
                    >
                      {row[key]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
