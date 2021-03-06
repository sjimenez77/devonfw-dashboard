import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useNewProjectStyles from './new-project.styles';
import Box from '@material-ui/core/Box';

export default function NewProject(): JSX.Element {
  const classes = useNewProjectStyles();

  return (
    <Card>
      <CardMedia
        className={classes.cardMedia}
        image="/static/assets/add_new_project.png"
        title="Add new Project"
      />
      <CardContent className={classes.cardContent}>
        <Typography component="span">
          <Box fontWeight="fontWeightBold" fontSize={14}>
            Add New Project
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
