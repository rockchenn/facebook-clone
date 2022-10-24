import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';

function Post(props) {
  const post = props?.post;
  let found = false;

  /* reference from https://stackoverflow.com/questions/63232588/how-to-make-a-new-line-for-react */
  const processMessage = post?.message.split('\n').map((line, idx) => {
    let ll = [];

    for (let start = 0, end = line.indexOf(props.keyword, start), i = 0;
         props.keyword !== '' && start < line.length;
         end = line.indexOf(props.keyword, start)) {
      if (end === -1) {
        ll.push(<span key={ i++ }>{ line.slice(start) }</span>);
        break;
      } else {
        /* if there's a keyword match, then highlight keyword */
        ll.push(
          <span key={ i++ }>
            { line.slice(start, end) }
            <b style={{ backgroundColor: 'yellow', color: 'black' }}>
              { props.keyword }
            </b>
          </span>);
        start = end + props.keyword.length;
        found = true;
      }
    }

    return (
      <span key={ idx }>
        { props.keyword === '' ? line : ll }
        <br />
      </span>
    );
  });

  return (
    (props.keyword === '' || found) &&
      <div className='post'>
        <div className='post__header'>
          <Avatar src={ post?.avatar } sx={{ width: 32, height: 32}} />
          <div>
            <h4>{ post?.name }</h4>
            <p>{ new Date(post?.timestamp?.toDate()).toUTCString() }</p>
          </div>
        </div>
        <div className='post__body'>
          <p>{ processMessage }</p>
          <img src={ post?.image } alt={ post?.image } />
        </div>
      </div>
  );
}

export default Post;