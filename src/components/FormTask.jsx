export default function FormTask() {
    return(
        <form>
            <div>
                <label htmlFor="name">task</label>
                <input type="text" id="name" />
                <label htmlFor="description">Descricao</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
            </div>
        </form>
    )
}