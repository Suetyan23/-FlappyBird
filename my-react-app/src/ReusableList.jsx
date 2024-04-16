import PropTypes from 'prop-types';

function ReusableList (props) {
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}> {item.name}: <b>{item.calories}</b>
    </li> );

  return (
    <div className='reusable-list'>
    <h3>{category}</h3>
    <ol>{listItems}</ol>
    </div>
  );

}

ReusableList.propTypes = {
    category: PropTypes.string, 
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                        name: PropTypes.string,
                                        calories: PropTypes.number})), 
  };

export default ReusableList