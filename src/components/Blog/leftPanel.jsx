import React from 'react';
import { v4 } from 'uuid';
import { Divider, Tag } from 'antd';
import { SearchIcon } from '../MyIcons/icons';

export default function LeftPanel(props) {
  const {
    blogs,
    tagStat,
    categoryStat,
    handleCategoryLabelClick,
    handleTagClick,
  } = props;

  const URL = process.env.REACT_APP_URL_ENDPOINT;

  return (
    <>
      <div className={'left-panel w-1/5 h-full flex flex-col rounded-xl gap-4'}>
        <div className={'rounded-xl backdrop-blur-sm backdrop-brightness-200 '}>
          <div className={'avatar flex w-full justify-center my-10'}>
            <img
              src={`${URL}/images/myavatar.png`}
              alt={'avatar'}
              className={'rounded-full'}
            />
          </div>
          <div className={'blog-overview flex text-white justify-between mx-2'}>
            <div
              className={
                'flex flex-col items-center relative lg:w-20 lg:h-16 md:w-10 md:h-8 sm:w-5 sm:h-4 lg:text-base md:text-sm sm:text-xs'
              }
            >
              <span>Articles</span>
              <span>{`${blogs.length}`}</span>
            </div>
            <div
              className={
                'flex flex-col items-center relative lg:w-20 lg:h-16 md:w-10 md:h-8 sm:w-5 sm:h-4 lg:text-base md:text-sm sm:text-xxs'
              }
            >
              <span>Tags</span>
              <span>{`${tagStat.length}`}</span>
            </div>

            <div
              className={
                'flex flex-col items-center relative lg:w-20 lg:h-16 md:w-10 md:h-8 sm:w-5 sm:h-4 lg:text-base md:text-sm sm:text-xxs'
              }
            >
              <span>Category</span>
              <span>{`${categoryStat.length}`}</span>
            </div>
          </div>
        </div>

        <Divider className={'bg-white backdrop-blur-xl'} />
        <div
          className={
            'search flex items-center w-full h-12 backdrop-blur bg-white rounded-xl bg-opacity-75 relative lg:text-base md:text-sm sm:text-xs'
          }
        >
          <input
            placeholder={'type here to search'}
            className={'rounded-xl pl-2 w-full h-full'}
          />
          <button className={'absolute right-0 h-full mr-2'}>
            <SearchIcon />
          </button>
        </div>
        <div
          className={
            'tags w-full min-h-[8rem] backdrop-blur bg-white rounded-xl bg-opacity-75 flex p-1 flex-wrap justify-center items-center'
          }
        >
          <Divider
            children={'Featured Tags'.toUpperCase()}
            className={'font-black font-sans'}
          />
          {tagStat.map((tag) => {
            return (
              <button onClick={handleTagClick(tag?._id)} key={v4()}>
                <Tag color={getRandomColor()} className={'h-1/5'}>
                  {tag?._id}
                </Tag>
              </button>
            );
          })}
        </div>
        <div
          className={
            'categories w-full min-h-[8rem] backdrop-blur bg-white rounded-xl bg-opacity-75 flex justify-center items-center flex-wrap'
          }
        >
          <Divider
            children={'Featured Category'.toUpperCase()}
            className={'font-black font-sans'}
          />
          <ul>
            {categoryStat.map((category) => {
              return (
                <li
                  onClick={handleCategoryLabelClick(category?._id)}
                  key={v4()}
                >
                  <button>
                    <Tag className={'h-1/5'} color={getRandomColor()}>
                      {category?._id}
                    </Tag>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

function getRandomColor() {
  //predefine color list
  const colorList = [
    '#f5222d',
    '#fa541c',
    '#fa8c16',
    '#faad14',
    '#fadb14',
    '#a0d911',
    '#52c41a',
    '#13c2c2',
    '#1890ff',
    '#2f54eb',
    '#722ed1',
    '#eb2f96',
  ];
  return colorList[Math.floor(Math.random() * colorList.length)];
}
