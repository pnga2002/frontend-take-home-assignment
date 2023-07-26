import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import * as Tabs from '@radix-ui/react-tabs';
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root  className='mt-5' defaultValue="tab1" orientation="vertical">
          <Tabs.List aria-label="tabs example">
            <Tabs.Trigger  value="tab1">
              <button
                className="me-8 flex justify-center items-center rounded-full bg-gray-200 text-gray-700 p-12-24"
                type="button">Add
              </button>
            </Tabs.Trigger>
            <Tabs.Trigger value="tab2"><button
              className='me-8 flex justify-center items-center rounded-full bg-gray-200 text-gray-700 p-12-24 '
              type="button">Pending
            </button></Tabs.Trigger>
            <Tabs.Trigger value="tab3"><button
              className='me-8 flex justify-center items-center rounded-full bg-gray-200 text-gray-700 p-12-24 '
              type="button">Completed
            </button></Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="pt-10" value="">
            <TodoList />
          </Tabs.Content>
          
        </Tabs.Root>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
