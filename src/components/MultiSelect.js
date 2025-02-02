/* eslint-disable no-use-before-define */
import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
// import styled from 'styled-components';

// const Label = styled('label')`
//   padding: 0 0 4px;
//   line-height: 1.5;
//   display: block;
// `;

// const InputWrapper = styled('div')`
//   width: 300px;
//   border: 1px solid #d9d9d9;
//   background-color: #fff;
//   border-radius: 4px;
//   padding: 1px;
//   display: flex;
//   flex-wrap: wrap;

//   &:hover {
//     border-color: #40a9ff;
//   }

//   &.focused {
//     border-color: #40a9ff;
//     box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
//   }

//   & input {
//     font-size: 14px;
//     height: 30px;
//     box-sizing: border-box;
//     padding: 4px 6px;
//     width: 0;
//     min-width: 30px;
//     flex-grow: 1;
//     border: 0;
//     margin: 0;
//     outline: 0;
//   }
// `;

// const Tag = styled(({ label, onDelete, ...props }) => (
//   <div {...props}>
//     <span>{label}</span>
//     <CloseIcon onClick={onDelete} />
//   </div>
// ))`
//   display: flex;
//   align-items: center;
//   height: 24px;
//   margin: 2px;
//   line-height: 22px;
//   background-color: #fafafa;
//   border: 1px solid #e8e8e8;
//   border-radius: 2px;
//   box-sizing: content-box;
//   padding: 0 4px 0 10px;
//   outline: 0;
//   overflow: hidden;

//   &:focus {
//     border-color: #40a9ff;
//     background-color: #e6f7ff;
//   }

//   & span {
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//   }

//   & svg {
//     font-size: 12px;
//     cursor: pointer;
//     padding: 4px;
//   }
// `;

// const Listbox = styled('ul')`
//   width: 300px;
//   margin: 2px 0 0;
//   padding: 0;
//   position: absolute;
//   list-style: none;
//   background-color: #fff;
//   overflow: auto;
//   max-height: 250px;
//   border-radius: 4px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//   z-index: 1;

//   & li {
//     padding: 5px 12px;
//     display: flex;

//     & span {
//       flex-grow: 1;
//     }

//     & svg {
//       color: transparent;
//     }
//   }

//   & li[aria-selected='true'] {
//     background-color: #fafafa;
//     font-weight: 600;

//     & svg {
//       color: #1890ff;
//     }
//   }

//   & li[data-focus='true'] {
//     background-color: #e6f7ff;
//     cursor: pointer;

//     & svg {
//       color: #000;
//     }
//   }
// `;

export default function CustomizedHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [top100Films[1]],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  return (
    <NoSsr>
      <div>
        <div {...getRootProps()}>
          <label className="block pb-1" {...getInputLabelProps()}>Customized hook</label>
          <div ref={setAnchorEl} className="flex flex-wrap p-1 border rounded">
            {value.map((option, index) => (
              <span className="mb-1 mr-1" label={option.title}  poppe={getTagProps({ index })} >
                <div className="flex items-center space-x-3 px-2 py-1 rounded text-sm text-gray-600 bg-gray-100 border border-gray-300">
                  <span>{ option.title }</span>
                  <CloseIcon onClick={getTagProps({ index }).onDelete} />
                </div>
              </span>
            ))}

            <input className="h-8 px-4 py-6 w-full flex-grow outline-none" {...getInputProps()} />
          </div>
        </div>
        {groupedOptions.length > 0 ? (
          <div className="absolute bg-white p-2 space-y-1 overflow-auto max-h-64 rounded z-10" {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li className="hover:bg-gray-200 py-1" {...getOptionProps({ option, index })}>
                <span>{option.title}</span>
                <CheckIcon className="text-green-400" fontSize="small" />
              </li>
            ))}
          </div>
        ) : null}
      </div>
    </NoSsr>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
];
