import React, { createContext, useState } from 'react'

type Context = [
  state: string,
  dispatch: React.Dispatch<React.SetStateAction<string>>
]

export const ProjectContext = createContext<Context>(['', () => null]);

const ProjectedContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projectId, setProjectId] = useState<string>('');

  return (
    <ProjectContext.Provider value={[projectId, setProjectId]} >
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectedContext