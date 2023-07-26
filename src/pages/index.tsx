import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ('pending', 'completed', or both). The UI should look like
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
  const [selected, setSelected] = useState<'all' | 'pending' | 'completed'>(
    'all'
  )
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root className="mt-5" defaultValue="tab1" orientation="vertical">
          <Tabs.List aria-label="tabs example" className="flex">
            <Tabs.Trigger
              value="tab1"
              onClick={() => setSelected('all')}
              className={`me-8 flex items-center justify-center rounded-full bg-gray-200 p-12-24 text-gray-700 ${
                selected === 'all' ? 'bg-gray-700 text-white' : ''
              }`}
              type="button"
            >
              Add
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab2"
              onClick={() => setSelected('pending')}
              className={`me-8 flex items-center justify-center rounded-full bg-gray-200 p-12-24 text-gray-700 ${
                selected === 'pending' ? 'bg-gray-700 text-white' : ''
              }`}
              type="button"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab3"
              onClick={() => setSelected('completed')}
              className={`me-8 flex items-center justify-center rounded-full bg-gray-200 p-12-24 text-gray-700 ${
                selected === 'completed' ? 'bg-gray-700 text-white' : ''
              }`}
              type="button"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="pt-10" value="tab1">
            <TodoList selected={selected} />
          </Tabs.Content>
          <Tabs.Content className="pt-10" value="tab2">
            <TodoList selected={selected} />
          </Tabs.Content>
          <Tabs.Content className="pt-10" value="tab3">
            <TodoList selected={selected} />
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
