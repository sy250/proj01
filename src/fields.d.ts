declare namespace kintone.types {
  interface Fields {
    レコード番号: {
      type: "RECORD_NUMBER";
      value: string;
      error?: string;
    };
    sumPrice: {
      type: "CALC";
      value: string;
      error?: string;
    };
    borrowLib: {
      type: "SINGLE_LINE_TEXT";
      value: string;
      error?: string;
    };
    borrowDateTime: {
      type: "DATETIME";
      value: string;
      error?: string;
    };
    Table: {
      type: "SUBTABLE";
      value: {
        id: string;
        value: {
          no: {
            type: "NUMBER";
            value: string;
            error?: string;
          };
          ISBN: {
            type: "SINGLE_LINE_TEXT";
            value: string;
            error?: string;
          };
          price: {
            type: "NUMBER";
            value: string;
            error?: string;
          };
          collectionLib: {
            type: "SINGLE_LINE_TEXT";
            value: string;
            error?: string;
          };
          title: {
            type: "SINGLE_LINE_TEXT";
            value: string;
            error?: string;
          };
        };
      }[];
    };
  }
  interface SavedFields extends Fields {
    $id: {
      type: "__ID__";
      value: string;
    };
    $revision: {
      type: "__REVISION__";
      value: string;
    };
    更新者: {
      type: "MODIFIER";
      value: { code: string; name: string };
    };
    作成者: {
      type: "CREATOR";
      value: { code: string; name: string };
    };
    更新日時: {
      type: "UPDATED_TIME";
      value: string;
      error?: string;
    };
    作成日時: {
      type: "CREATED_TIME";
      value: string;
      error?: string;
    };
  }
}
