
import PropTypes from 'prop-types'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FilledTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
        </div>
    )
}

TaskList.propTypes = {
    data: PropTypes.shape({
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          active: PropTypes.bool,
          newTask: PropTypes.bool,
          completed: PropTypes.bool,
          failed: PropTypes.bool,
          category: PropTypes.string.isRequired,
          taskDate: PropTypes.string.isRequired,
          taskTitle: PropTypes.string.isRequired,
          taskDescription: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

export default TaskList