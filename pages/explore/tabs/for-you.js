import React from 'react';
import dummyData from '@/model/for-you';
import List from '@/components/explore/Lists/ListItem';
import PremierLeague from '@/components/explore/Lists/PremierLeague';

const forYou = () => {
  return (
    <>
      <div className='mt-5 ms:pb-12 md:pb-44 mx-3 '>
        <PremierLeague />
        <div className='text-white'>
          <ul>
            {dummyData.map((item) => {
              return (
                <List
                  key={item.id}
                  title={item.title}
                  likes={item.likes}
                  header='Trending in the United Kingdom'
                >
                  {item.title}
                </List>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default forYou;
