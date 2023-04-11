import {
  on,
  removeClasses,
  replaceWith,
  Span,
  withProps,
} from '@bodiless/fclasses';
import { asElementToken } from '@bodiless/vital-elements';
import {
  asSearchBoxToken,
  asSearchTogglerToken,
  vitalSearchBoxBase,
  vitalSearchTogglerBase,
} from '@bodiless/vital-search';
import { listerineColor } from '../../Color';
import { listerineTypography } from '../../Typography';
import SearchIcon from '../assets/Search';

const DesktopSearch = asSearchBoxToken({
  ...vitalSearchBoxBase.Inline,
  Components: {
    SearchButton: replaceWith(SearchIcon),
    SearchInput: on(Span)(
      asElementToken(listerineTypography.WhiteLink, {
        Content: {
          _: withProps({
            children: 'Search',
          }),
        },
        Spacing: {
          _: 'pl-4 pr-9',
        },
        Behavior: {
          _: removeClasses('hover:text-interactive-primary-hover px-2 mr-2'),
        },
      }),
    ),
  },
  Theme: {
    SearchButton: listerineColor.TextWhite,
  },
  Layout: {
    SearchWrapper: 'flex flex-row-reverse items-center w-auto',
  },
});

const SearchToggler = asSearchTogglerToken({
  ...vitalSearchTogglerBase.Default,
  Components: {
    Icon: replaceWith(SearchIcon),
  },
  Layout: {
    Wrapper: 'lg:hidden',
  },
});

export default {
  DesktopSearch,
  SearchToggler,
};
