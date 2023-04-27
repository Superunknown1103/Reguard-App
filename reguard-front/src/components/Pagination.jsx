import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Pagination = (props) => {
    return (<div>
        <Button
            variant="contained"
            color="primary"
            style={{margin: "5px"}}
            endIcon={<ArrowBackIcon />}
            onClick={() => { if (props.page > 1) { props.setPage(props.page - 1) } }}
        />
        <Button
            variant="contained"
            color="primary"
            style={{margin: "5px"}}
            endIcon={<ArrowForwardIcon />}
            onClick={() => { props.setPage(props.page + 1) }}
        />
    </div>)
}

export default Pagination;