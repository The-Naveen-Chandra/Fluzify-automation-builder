import Workflow from "./workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <Workflow
          description="Creating a test workflow"
          id="123"
          name="Test Workflow"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
