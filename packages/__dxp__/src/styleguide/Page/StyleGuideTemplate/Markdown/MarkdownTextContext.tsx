import React, { createContext, useContext, useState } from 'react';
import { HOC, addProps } from '@bodiless/fclasses';

const markdownDefault = `Here are some examples of Markdown Components:

Note that it currently supports brand styling only for '<p>', '<a>', '<strong>', and '<sup>' componets. All other styling is ignored.

### **Example of Bold Text:**

**This is Bold Text** \n
__This is Bold Text__

### **Example of Links:**

[Link text 1](#)

[Link text 2](#)

### **Example of Superscript:**

Lorem^®^ ipsum dolor sit amet^®^, consectetur adipiscing elit. Nullam^®^ quis nisl velit. Nullam^®^ blandit auctor vulputate. Aliquam^®^ dui urna, egestas vitae leo a, maximus aliquam elit. Sed a mattis nibh.


### **Example of Paragraphs:**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nisl velit. Nullam blandit auctor vulputate. Aliquam dui urna, egestas vitae leo a, maximus aliquam elit. Sed a mattis nibh.

Donec auctor odio mi, tempus egestas velit interdum convallis. Sed nec maximus ligula. Nullam pretium rutrum elit quis tempus. Pellentesque scelerisque nisi sed nunc gravida ornare varius quis neque. Sed efficitur massa vel iaculis faucibus. Fusce auctor faucibus tellus, semper maximus lectus pellentesque non.
`;

const MarkownTextContext = createContext<any>(null);
const useMarkownTextContext = () => useContext(MarkownTextContext);

const withMarkownTextProvider: HOC = Component => props => {
  const [text, setText] = useState<string>(markdownDefault);

  return (
    <MarkownTextContext.Provider value={{ text, setText }}>
      <Component {...props} />
    </MarkownTextContext.Provider>
  );
};

const useChildrenFromContext = () => ({ children: useMarkownTextContext().text });
const withChildrenFromContext = addProps(useChildrenFromContext);

export {
  useMarkownTextContext,
  withMarkownTextProvider,
  withChildrenFromContext,
};
