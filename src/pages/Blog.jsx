import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Button,
  FormLabel
} from '@material-ui/core';
import { SendRounded } from '@material-ui/icons';
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';
import styled from '@emotion/styled';
import FirebaseDocument from '../configurations/firestore';

const Input = styled.input`
color: black;
padding : 10px;
border: 1px grey;
border-radius : 20px;
width : 300px;
transition: width 0.5s linear;
margin: 10px;
&:focus {
  outline: none;
  border: none;
  width : 350px;
  transition: width 0.5s ease;
}
`;

const Blogs = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const handleEditorChange = (e) => {
    setDescription(e);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleClickButton = () => {
    console.log(title);
    console.log(description);
    FirebaseDocument.insertDataFirestore({ title, description });
    // setTitle('');
    // setDescription('');
  };

  return (
    <>
      <Helmet>
        <title>Account | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid>
            <FormLabel>Masukan Judul blog</FormLabel>
            <Input placeholder="Type input ...." onChange={(e) => handleTitleChange(e)} value={title} />
          </Grid>
          <Grid>
            <FormLabel>Masukan Deskripsi blog</FormLabel>
            <Editor
              apiKey="znkq9i9oe6ka6vysbu2cwgm8a0t0xcjkkza9wnv8vd815ohq"
              init={{
                height: 800,
                menubar: 'insert file edit insert view format table tools help',
                default_link_target: '_blank',
                allow_unsafe_link_target: true,
                link_default_protocol: 'https',
                plugins: [
                  'advlist autolink lists link image',
                  'charmap print preview anchor help',
                  'searchreplace visualblocks code',
                  'insertdatetime media table paste wordcount',
                  'autolink emoticons autosave'
                ],
                toolbar:
                  'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |image'
              }}
              value={description}
              onEditorChange={(newValue) => handleEditorChange(newValue)}
            />
          </Grid>
          <Grid sx={{
            textAlign: 'right', marginTop: '10px'
          }}
          >
            <Button variant="contained" endIcon={<SendRounded />} onClick={() => handleClickButton()}>Haloo</Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Blogs;
