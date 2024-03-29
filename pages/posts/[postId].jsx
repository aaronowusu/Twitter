import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import usePost from '@/hooks/usePost';
import { ClipLoader } from 'react-spinners';
import PostItem from '@/components/Posts/PostItem';
import ReplyForm from '@/components/Posts/ReplyForm';
import CommentFeed from '@/components/Posts/CommentFeed';
import { getSession } from 'next-auth/react';

function Post() {
  const router = useRouter();
  const { postId } = router.query;
  

  const { data: fetchedPost, isLoading } = usePost(postId);


  if (isLoading || !fetchedPost) {
    <div className='flex justify-center items-center h-full'>
      <ClipLoader color='lightblue' size={80} />
    </div>;
  }
  return (
    <>
      <div className='fixed  top-0  ms:w-full md:w-[511px] lg:w-[574px]  2xl:w-[766px] bg-white dark:bg-black mb-4  z-10 opacity-98 '>
        <div className=' h-[53px] px-4 pt-4 '>
          <div className='flex flex-row items-center gap-4'>
            <div className='backArrow  p-1 flex flex-row item-center dark:text-white rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light '>
              <ArrowBackIcon
                className='cursor-pointer'
                onClick={() => router.back()}
              />
            </div>
            <div>
              <h2 className='text-xl dark:text-white text-black font-bold'>
                Tweet
              </h2>
            </div>
          </div>
        </div>
      </div>
      <main className='flex justify-start items-start  h-screen w-full overflow-y-auto scrollbar-thin dakr:scrollbar-thumb-widget-border scrollbar-track-transparent '>
        <div className='mt-[53px] w-full'>
          <PostItem data={fetchedPost} />
          <ReplyForm data={fetchedPost} />
          <CommentFeed comments={fetchedPost?.comments}/>
        </div>
      </main>
    </>
  );
}

export default Post;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
